import { Flag } from './flag';

export class Tricolor extends Flag {
  constructor(images) {
    super('Tricolor');
    this.tricolor = {
      bands: ['#009246', '#F1F2F1', '#CE2B37'],
      coatOfArms: '',
      orientation: 'Vertical',
      images,
      showCoatOfArms: 'Show',
      currentImageIndex: 0,
    };
  }

  get currentImage() {
    return this.tricolor.images[this.tricolor.currentImageIndex].src;
  }

  changeCoat(newName) {
    const images = this.tricolor.images;
    this.tricolor.currentImageIndex = images.findIndex((image) => image.name === newName);
  }

  updateBandColor({ newColor, index }) {
    this.tricolor.bands.splice(index, 1, newColor);
    // this.tricolor.bands[index] = newColor;
  }

  showCoatOfArms() {
    return this.tricolor.showCoatOfArms === 'Show';
  }

  draw(sketch, cWidth, cHeight) {
    super.draw(sketch);
    const bandColors = this.tricolor.bands;
    const orientation = this.tricolor.orientation;
    const verticalBandWidth = 200;
    const horizontalBandHeight = 100;

    for (let i = 0; i < bandColors.length; i += 1) {
      const color = bandColors[i];
      sketch.fill(color);
      sketch.noStroke();
      if (orientation === 'Vertical') {
        sketch.rect(verticalBandWidth * i, 0, verticalBandWidth, cHeight);
      } else {
        sketch.rect(0, horizontalBandHeight * i, cWidth, horizontalBandHeight);
      }
      if (this.showCoatOfArms()) {
        const imgWidth = this.currentImage.width / 5;
        const imgHeight = this.currentImage.height / 5;
        sketch.image(
          this.currentImage,
          cWidth / 2 - imgWidth / 2,
          cHeight / 2 - imgHeight / 2,
          imgWidth,
          imgHeight,
        );
      }
    }
  }
}
