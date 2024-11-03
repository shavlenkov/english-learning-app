import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  private storageKey = 'words';

  loadWords(): string[] {
    const storedWords = localStorage.getItem(this.storageKey);
    return storedWords ? storedWords.split(';') : [];
  }

  addWord(word: string): void {
    const words = this.loadWords();
    words.push(word);
    localStorage.setItem(this.storageKey, words.join(';'));
  }

  deleteWord(index: number): void {
    const words = this.loadWords();
    words.splice(index, 1);
    localStorage.setItem(this.storageKey, words.join(';'));
  }
}
