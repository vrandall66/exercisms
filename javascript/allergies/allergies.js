//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Allergies {
  constructor(score) {
    this.score = score;
  }

  list() {}

  allergicTo(allergy) {
    let points = this.calculation(allergy);
    console.log('points', points.score);
    let result = this.score - points.score;
    console.log('result', result);
  }

  calculation(allergy) {
    switch (allergy) {
      case 'eggs':
        return { score: 1 };
      case 'peanuts':
        return { score: 2 };
      case 'shellfish':
        return { score: 4 };
      case 'strawberries':
        return { score: 8 };
      case 'tomatoes':
        return { score: 16 };
      case 'chocolate':
        return { score: 32 };
      case 'pollen':
        return { score: 64 };
      case 'cats':
        return { score: 128 };
      default:
        return { score: 0 };
    }
  }
}
