import { Key } from 'react';
import Image from 'next/image';

async function getInstagramPostData() {
    try {
        const accessToken = process.env.APP_ACCESS_TOKEN;

        if (!accessToken) {
            throw new Error('Failed to get access token')
        }

        const userId = 'me';

        const res = await fetch(`https://graph.instagram.com/${userId}/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${accessToken}`, {
            next: {
                revalidate: 604800 // 1 week
            }
        });

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        const data = await res.json();

        if (!data || !data.data || data.data.length === 0) {
            throw new Error('Failed to parse data')
        }

        return data.data || []
    } catch (error) {
        console.error('Failed to fetch Instagram post data:', error);
        return []
    }
}

function mutateCaption(caption: string) {
    let text = caption.split('\n')[0].trim();
    text = text.split("📸")[0].trim();
    text = text.split("📷")[0].trim();
    text = text.split("Image by")[0].trim();
    return text;
}

function truncateSentence(text: string, numberOfCharacters: number) {
    if (text.length <= numberOfCharacters) return text;
    const regex = new RegExp(`\\b[\\w']+(?:[^\\w\\n]+[\\w']+){0,${numberOfCharacters - 1}}\\b`, 'g');
    const subString = text.match(regex); // split up text into n words

    if (subString && subString.length > 0) {
        // find nearest end of sentence
        const period = subString[0].lastIndexOf('.');
        const questionMark = subString[0].lastIndexOf('?');
        const exclamationMark = subString[0].lastIndexOf('!');
        const ellipsis = subString[0].lastIndexOf('...');

        const endOfSentence = Math.max(period, questionMark, exclamationMark, ellipsis);

        // If a sentence-ending punctuation is found
        if (endOfSentence !== -1) {
            return subString[0].substring(0, endOfSentence + 1);
        }

        // If no sentence-ending punctuation is found
        return subString[0];
    }

    return text;
}

function generateAlt(caption: string) {
    let text = caption.split('\n')[0].trim();
    text = truncateSentence(text, 30);
    let words = text.split(' ');
    words.forEach((word, index) => {
        if (word.startsWith("#")) {
            word = word.replace(/[A-Z]/g, str => ' ' + str);
            words[index] = word.substring(1);
        }
        if (word.startsWith("@")) {
            word = word.replace(/[A-Z]/g, str => ' ' + str);
            words[index] = word.substring(1);
        }
    });
    text = words.join(' ');
    return text
}
function generateCaption(caption: string) {
    let words = caption.split(' ');
    words.forEach((word, index) => {
        if (word.startsWith("#")) {
            word = word.replace(/[A-Z]/g, str => ' ' + str);
            words[index] = word.substring(1);
        }
    });
    return words.join(' ');
}

export default async function InstagramPosts() {
    const posts = await getInstagramPostData();

    if (!posts || posts.length === 0) {
        return null;
    }

    return (
        <div className="h-37 text-center overflow-hidden">
            {posts.map((post: { id: Key; permalink: string; media_url: string; caption: string; media_type: string; thumbnail_url: string; }) => {
                const imageUrl = post.thumbnail_url ?? post.media_url;

                let caption = mutateCaption(post.caption);
                const altText = generateAlt(caption);
                const captionText = generateCaption(caption);

                return (
                    <a key={post.id} href={post.permalink} target="_blank" rel="noopener noreferrer" className="relative group inline-block hover:bg-opacity-90 hover:grayscale transition duration-150 cursor-pointer">
                        {imageUrl && (
                            <>
                                <Image
                                    src={imageUrl}
                                    alt={altText}
                                    width={500}
                                    height={300}
                                    className="h-37 w-37 inline-block object-cover aspect-square rounded-sm md:h-62 md:w-62 sm:h-50 sm:w-50"
                                    loading="lazy"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-20 text-white text-sm p-1 transition-opacity duration-150 group-hover:bg-opacity-70">
                                    {captionText}
                                </div>
                            </>
                        )}
                    </a>
                )
            }
            )}
        </div>
    )
}
