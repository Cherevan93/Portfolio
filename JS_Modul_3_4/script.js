var test = {
    body: function () {
        var body = document.body;
        body.style.width = '100%';
        body.style.backgroundColor = '#c8c8c8';
    },

    addWrapper: function () {
        container = document.createElement('div');
        container.classList.add('container');
        container.classList.add('row');
        container.style.width = '80%';
        container.style.margin = '0 auto';
        container.style.backgroundColor = 'grey';
        document.body.appendChild(container);
    },

    addHeader: function () {
        var header = document.createElement('h3');
        header.innerHTML = 'Тест по программированию!';
        header.style.textAlign = 'center';
        header.style.color = 'white';
        header.style.paddingTop = '30px';
        container.appendChild(header);
    },

    addQuestions: function () {
        var Form = document.createElement('form');
        Form.style.width = '100%';
        container.appendChild(Form);

        questions = document.createElement('ul');
        Form.appendChild(questions);

        for (var i = 1; i <= 3; i++) {
            var questionsText = document.createElement('ol');
            questions.appendChild(questionsText);

            var questionsTextP = document.createElement('p');
            questionsTextP.innerHTML = i +'. Вопрос №' + i;
            questionsText.appendChild(questionsTextP);

            for (var k = 1; k <= 3; k++) {
                var listAnswersLi = document.createElement('li');
                listAnswersLi.style.listStyle = 'none';
                listAnswersLi.style.marginLeft = '30px';
                questionsText.appendChild(listAnswersLi);

                var answerInput = document.createElement('input');
                answerInput.setAttribute('type', 'checkbox');
                answerInput.style.marginRight = '5px';
                listAnswersLi.appendChild(answerInput);

                var answer = document.createElement('label');
                answer.innerHTML = 'Вариант ответа №' + k;
                listAnswersLi.appendChild(answer);

            };
        };
    },
    addButton: function () {
        var psubmit = document.createElement('p');
        psubmit.style.textAlign = 'center';
        questions.appendChild(psubmit);

        var submit = document.createElement('button');
        submit.setAttribute('type', 'submit');
        submit.innerHTML = 'Проверить мои результаты';
        submit.style.marginBottom = '30px';
        psubmit.appendChild(submit);
    },
};

test.body();
test.addWrapper();
test.addHeader();
test.addQuestions();
test.addButton();