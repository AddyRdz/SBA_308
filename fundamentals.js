// A CourseInfo object, which looks like this:
const courseInfo = {
  id: 300,
  name: 'Introduction to Computer Science'
};


// An AssignmentGroup object, which looks like this:
const assignmentGroup = {
  id: 12345,
  name: 'Introduction to Computers',
  course_id: 300,
  group_weight: 23,
  assignments: [
    {
      id: 1,
      name: 'History of Computers',
      due_at: '2024-01-13',
      points_possible: 75 
    },
    {
      id: 2,
      name: 'What Are Computers?',
      due_at: '2024-02-23',
      points_possible: 50
    },
    {
      id: 3,
      name: 'Evolution of Lenovo',
      due_at: '2024-03-10',
      points_possible: 100
    }

  ]

};


const learnerSubmission = [
  {
    learner_id: 321,
    assignment_id: 1,
    submission: {
      submitted_at: '2024-01-13',
      score: 70
    }
  },
  {
    learner_id: 321,
    assignment_id: 2,
    submission: {
      submitted_at: '2024-02-23',
      score: 40
    }
  },
  {
    learner_id: 321,
    assignment_id: 3,
    submission: {
      submitted_at: '2024-03-10',
      score: 86
    }
  },
  {
    learner_id: 456,
    assignment_id: 1,
    submission: {
      submitted_at: '2024-01-13',
      score: 68
    }
  },
  {
    learner_id: 456,
    assignment_id: 2,
    submission: {
      submitted_at: '2024-02-23',
      score: 45
    }
  },
  {
    learner_id: 456,
    assignment_id: 3,
    submission: {
      submitted_at: '2024-03-10',
      score: 72
    }
  }
];




function getLearnerData(courseInfo, assignmentGroup, learnerSubmission){
  // If an AssignmentGroup does not belong to its course (mismatching course_id), your program should throw an error, letting the user know that the input was invalid.
  if (assignmentGroup.course_id !== courseInfo.id) {
    throw new Error("Input was invalid, id's do not match.")
  }
  return ("Assignment Group and Course id's match.")
}

const result = getLearnerData(courseInfo, assignmentGroup, learnerSubmission);
console.log(result);


