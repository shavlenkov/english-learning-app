import { Component, EventEmitter, Output } from '@angular/core'

import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrl: './add-word.component.scss',
  imports: [FormsModule],
  standalone: true
})
export class AddWordComponent {
  newWord: string = ''
  newTranslation: string = ''

  @Output() wordAdded = new EventEmitter<string>()

  addWord() {
    if (this.newWord && this.newTranslation) {
      const newEntry = `${this.newWord},${this.newTranslation}`
      this.wordAdded.emit(newEntry)
      this.newWord = ''
      this.newTranslation = ''
    }
  }
}
