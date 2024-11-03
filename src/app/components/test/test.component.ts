import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { TestService } from '../../services/test/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  imports: [FormsModule, CommonModule, RouterLink],
  standalone: true
})
export class TestComponent implements OnInit {
  words: { english: string; ukrainian: string }[] = [];
  currentWord: string = '';
  userAnswer: string = '';
  score: number = 0;
  currentIndex: number = 0;

  constructor(private testService: TestService) {}

  ngOnInit() {
    this.loadWords();
    this.nextWord();
  }

  loadWords() {
    this.words = this.testService.loadWords();
  }

  nextWord() {
    if (this.currentIndex < this.words.length) {
      this.currentWord = this.words[this.currentIndex].ukrainian;
      this.userAnswer = '';
    } else {
      alert(`Тест завершено! Ваш результат: ${this.score}/${this.words.length}`);
      this.score = 0;
      this.currentIndex = 0;
      this.loadWords();
      this.nextWord();
    }
  }

  checkAnswer() {
    if (
      this.userAnswer.toLowerCase() ===
      this.words[this.currentIndex].english.toLowerCase()
    ) {
      this.score++;
    }
    this.currentIndex++;
    this.nextWord();
  }
}
