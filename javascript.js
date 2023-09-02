document.addEventListener("DOMContentLoaded", function () {
    const questionAnswers = document.querySelectorAll(".question-answer");

    // Agrega un controlador de eventos de clic a cada pregunta
    questionAnswers.forEach((qa) => {
        const question = qa.querySelector(".question");

        question.addEventListener("click", () => {
            // Encuentra la respuesta correspondiente
            const answer = qa.querySelector(".answer");

            // Verifica si la respuesta está visible
            const isExpanded = answer.style.maxHeight !== "0px";

            // Cierra todas las respuestas
            questionAnswers.forEach((otherQA) => {
                const otherAnswer = otherQA.querySelector(".answer");
                otherAnswer.style.maxHeight = "0px";
            });

            // Abre o cierra la respuesta actual
            if (!isExpanded) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
});
