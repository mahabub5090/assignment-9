import { useLoaderData } from 'react-router-dom';
import QuizAnswer from '../QuizAnswer/QuizAnswer';


const QuizQuestions = () => {


    const quiz = useLoaderData();
    // console.log(quiz.data.questions);
    return (
        <div className=' text-center'>
            <div className=' bg-slate-50'>
                <h1 className='text-4xl font-bold mt-16 py-8 bg-orange-300 '> Quiz of  {quiz.data.name}</h1>
                <h1 className='text-4xl font-bold bg-orange-300'> Total : {quiz.data.total}</h1>
            </div >
            <div className='bg-orange-300'>
                {
                    quiz.data.questions.map( questions =>

                        <QuizAnswer
                            key={ questions.id } questions={ questions }
                        ></QuizAnswer> )
                }

            </div>
            
        </div>
    );
};

export default QuizQuestions;