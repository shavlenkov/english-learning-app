import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private storageKey = 'words';

  loadWords(): { english: string; ukrainian: string }[] {
    const storedWords = localStorage.getItem(this.storageKey);
    if (storedWords) {
      const words = storedWords.split(';').map(word => {
        const [english, ukrainian] = word.split(',').map(item => item.trim());
        return { english, ukrainian };
      });
      this.shuffleArray(words);
      return words;
    }
    return [];
  }

  shuffleArray(array: { english: string; ukrainian: string }[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
