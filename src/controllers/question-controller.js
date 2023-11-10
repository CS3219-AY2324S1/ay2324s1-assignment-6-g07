const { Question } = require('../models/question');

const addQuestion = async (questionData) => {
  const question = new Question(questionData);
  try {
    await question.save();
  } catch (err) {
    console.log('Error creating question: ', err);
    return next(err);
  }
};

const updateQuestion = async (id, questionData) => {
  return await Question.findOneAndUpdate({ id: id }, questionData, {
    new: true,
  });
};

const addOrUpdateQuestion = async (questions) => {
  for (const question of questions) {
    const questionData = {
      id: question.questionId,
      title: question.title,
      description: question.content,
      complexity: question.difficulty,
      categories: question.topicTags.map((topic) => topic.name),
    };
    try {
      if (await Question.findOne({ id: questionData.id })) {
        await updateQuestion(question.id, questionData);
      } else {
        await addQuestion(questionData);
      }
    } catch (error) {
      throw error;
    }
  }
};

module.exports = { addOrUpdateQuestion };
