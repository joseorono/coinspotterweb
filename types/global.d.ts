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
    
    interface lightBoxSlide {
        src: string;
        caption?: string;
        alt?: string;
    }

}

