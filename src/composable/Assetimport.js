export default function AssetImport() {
    const images = import.meta.glob('../assets/**/*.png', { eager: true });
    const svgs = import.meta.glob('../assets/**/*.svg', { eager: true });
    const gifs = import.meta.glob('../assets/**/*.gif', { eager: true });
    const jpgs = import.meta.glob('../assets/**/*.jpg', { eager: true });

    const getImageURL = (path, name, extension = 'png') => {
        const imagePath = `../assets${path}/${name}.${extension}`;

        // Check the appropriate glob object based on the extension
        if (extension === 'png') {
            return images[imagePath] ? images[imagePath].default : '';
        } else if (extension === 'svg') {
            return svgs[imagePath] ? svgs[imagePath].default : '';
        } else if (extension === 'gif') {
            return gifs[imagePath] ? gifs[imagePath].default : '';
        } else if (extension === 'jpg') {
            return jpgs[imagePath] ? jpgs[imagePath].default : '';
        }else {
            return '';
        }
    };

    const gameIcon = {
        Blackjack: getImageURL('/Home', 'Blackjack'),
        Crash: getImageURL('/Home', 'Crash'),
        Dice: getImageURL('/Home', 'Dice'),
        "Two-digit-lotto": getImageURL('/Home', 'Lotto'),
    }

    const getGameIcon = (game) => {
        return gameIcon[toCapitalize(game)]
    };

    return { getImageURL, getGameIcon };
}