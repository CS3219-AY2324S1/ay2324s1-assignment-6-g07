const fetchLeetcodeQuestions =
  require('./api/fetch-questions.js').fetchLeetcodeQuestions;
const addOrUpdateQuestion =
  require('./controllers/question-controller.js').addOrUpdateQuestion;
const {
  connectToMongoDBAtlas,
  disconnectFromMongoDBAtlas,
} = require('./mongo-db.js');

let questions;
let logs = 'fail';
async function updateQuestionDatabase(event, context) {
  try {
    // Connect to MongoDB Atlas
    await connectToMongoDBAtlas();
    logs = 'mongo passed';

    // Fetch questions from LeetCode API
    questions = await fetchLeetcodeQuestions();
    logs = 'questions passed';

    // Populate question database
    await addOrUpdateQuestion(questions);
    logs = 'populated';

    // Disconnect from MongoDB Atlas
    await disconnectFromMongoDBAtlas();

    // Return success response
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Questions populated successfully' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message,
      }),
      test: 'test1',
      error: error,
      log: logs,
    };
  }
}

module.exports = { updateQuestionDatabase };
