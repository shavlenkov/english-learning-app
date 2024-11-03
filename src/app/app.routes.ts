import { Routes } from '@angular/router'
import { WordListComponent } from './components/word-list/word-list.component'
import { TestComponent } from './components/test/test.component'

export const routes: Routes = [
  { path: '', component: WordListComponent },
  { path: 'word-test', component: TestComponent }
]
