// types/global.d.ts

export {}

declare global {
    interface IFaqQuestion {
        question: string;
        answer: string;
    }

    interface FaqQuestionsProps {
        questions: IFaqQuestion[];
    }
}

