import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GameApiResponse, Question } from './model';

@Injectable()
export class GameApiService {

  constructor(private http: HttpClient) { }

  loadQuestion(): Observable<Question> {
    const url = 'https://opentdb.com/api.php?amount=1&&type=multiple';
    return this.http.get<GameApiResponse>(url).pipe(
      map(response => {
        const [question] = response.results;
        const answers = [
          question.correct_answer,
          ...question.incorrect_answers
        ]

        return {
          question: question.question,
          answer: question.correct_answer,
          incorrect: question.incorrect_answers,
          answers: answers.sort(() => 0.5 - Math.random())
        }
      })
    );
  }
}