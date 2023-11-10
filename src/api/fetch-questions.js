const axios = require('axios');
require('dotenv').config();

const lc_query = `
      query {
        allQuestions {
          questionId
          title
          difficulty
          topicTags {
            name
          }
          content
          isPaidOnly
        }
      }
    `;

const fetchLeetcodeQuestions = async () => {
  try {
    // Send a POST request to the LeetCode GraphQL endpoint
    const response = await axios.post(
      process.env.LEETCODE_ENDPOINT,
      { query: lc_query },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (response.status !== 200) {
      throw new Error(
        `Error fetching questions from LeetCode API: ${response.status}`
      );
    }

    // const responseData = response.json();

    // Remove LC premium qns
    const filteredQuestions = response.data.data.allQuestions.filter(
      (question) => !question.isPaidOnly
    );
    return filteredQuestions;
  } catch (error) {
    console.error('Error fetching questions from LeetCode API:', error);
    throw error;
  }
};

module.exports = {
  fetchLeetcodeQuestions,
};
