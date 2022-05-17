export interface GameApiResponse {
    response_code: number;
    results: GameApiQuestion[];
}

export interface GameApiQuestion {
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

export interface Question {
    question: string;
    answer: string;
    answers: string[];
    incorrect: string[];
}

export interface Player {
    name: string | null;
    score: number
}