import { Component, OnInit } from '@angular/core';

import { AddWordComponent } from '../add-word/add-word.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { WordService } from '../../services/word/word.service';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.scss'],
  imports: [AddWordComponent, CommonModule, RouterLink],
  standalone: true
})
export class WordListComponent implements OnInit {
  words: string[] = [];
  showWords: boolean = false;

  constructor(private wordService: WordService) {}

  ngOnInit() {
    this.loadWords();
  }

  loadWords() {
    this.words = this.wordService.loadWords();
  }

  addWord(newEntry: string) {
    this.wordService.addWord(newEntry);
    this.loadWords();
  }

  deleteWord(index: number) {
    this.wordService.deleteWord(index);
    this.loadWords();
  }

  toggleWords() {
    this.showWords = !this.showWords;
  }
}
