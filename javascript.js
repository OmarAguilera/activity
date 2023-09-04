document.addEventListener("DOMContentLoaded", function () {
    /* Get all elements with the question-answer class */
    const questionAnswers = document.querySelectorAll(".question-answer");

    /* Loop through each question-answer element */
    questionAnswers.forEach((qa) => {
        const question = qa.querySelector(".question");

        question.addEventListener("click", () => {
            
            const answer = qa.querySelector(".answer");

            const isExpanded = answer.style.maxHeight !== "0px";

            questionAnswers.forEach((otherQA) => {
                const otherAnswer = otherQA.querySelector(".answer");
                otherAnswer.style.maxHeight = "0px";
            });

            if (!isExpanded) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
});
