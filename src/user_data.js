const Type = {
  Student:    "Student",
  Researcher: "Researcher"
}

function attempt(inProgress, duration, testCorrect, testTotal) {
  let attempt = {};
  
  attempt.description      = "";
	attempt.notes            = "";
  attempt.inProgress       = inProgress;
  attempt.startTime        = new Date("2024-07-01T00:00:00");
  attempt.endTime          = null;
  attempt.duration         = null;
  attempt.generatedCode    = null;
	attempt.failingTestCases = null;
  attempt.testCorrect      = null;
  attempt.testTotal        = null;

  if (!inProgress) {
    attempt.description      = "Description";
	  attempt.notes            = "Notes";
    attempt.generatedCode    = "LLM"
    attempt.failingTestCases = "Tests Failed"

    attempt.endTime = new Date(attempt.startTime);
    attempt.endTime.setSeconds(duration);

    attempt.duration         = duration;
    attempt.testCorrect      = testCorrect;
    attempt.testTotal        = testTotal;
  }

  return attempt;
}

function question(id, attempts) {
  let question = {};

  question.questionId = id;
  question.attempts = [];

  return question;
}

function user(username, password, type) {
  let user = {};

  user.username = username;
  user.password = password;
  user.type = type;
  user.statusLogin = false;
  user.questions = [];

  let q1 = question(1);
  let q2 = question(2);
  let q3 = question(3);
  let q4 = question(4);
  let q5 = question(5);
  let q6 = question(6);
  let q7 = question(7);
  let q8 = question(8);
  let q9 = question(9);
  let q10 = question(10);

  q1.attempts.push(attempt(false, 600, 0, 1));
  q1.attempts.push(attempt(false, 600, 1, 1));
  q1.attempts.push(attempt(false, 500, 1, 1));
  q1.attempts.push(attempt(true));
  q2.attempts.push(attempt(false, 600, 1, 2));
  q3.attempts.push(attempt(false, 600, 1, 2));
  q4.attempts.push(attempt(false, 600, 1, 2));
  q5.attempts.push(attempt(false, 600, 1, 2));
  q6.attempts.push(attempt(false, 600, 1, 2));
  q7.attempts.push(attempt(false, 600, 1, 2));
  q8.attempts.push(attempt(false, 600, 1, 2));
  q9.attempts.push(attempt(true));

  user.questions.push(q1);
  user.questions.push(q2);
  user.questions.push(q3);
  user.questions.push(q4);
  user.questions.push(q5);
  user.questions.push(q6);
  user.questions.push(q7);
  user.questions.push(q8);
  user.questions.push(q9);
  user.questions.push(q10);

  return user;
}

function user_data() {
  let users = [];

  let student_A = user("Student_A", "pStudent_A", Type.Student);
  let student_B = user("Student_B", "pStudent_B", Type.Student);
  let student_C = user("Student_C", "pStudent_C", Type.Student);
  let researcher_A = user("Researcher_A", "pResearcher_A", Type.Researcher);

  users.push(student_A);
  users.push(student_B);
  users.push(student_C);
  users.push(researcher_A);

  return { users: users };
}