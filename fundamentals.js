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
    throw new Error("Input was invalid, id's do not match.");
  }

  // implement a continue section to move on to the next part
  return ("Assignment Group and Course id's match.");

  // You should also account for potential errors in the data that your program receives. What if points_possible is 0? You cannot divide by zero. What if a value that you are expecting to be a number is instead a string? 
  if(assignmentGroup.points_possible === 0 ){
    console.error("Points possible is 0, skip this assignment.");
    return;
    // Check input is an actual number value and not a string.

  }
  try {
    if(assignmentGroup.points_possible === 0){
      console.log('Points possible is 0, skip this assignment.');
    }else if (isNaN((assignmentGroup.points_possible))) { // continue to check if number.
      console.log('Value added is a number, can include as assignment.');
    }else {
      throw new Error('Do not include in assignment')
    }
      } catch (error){
        console.log(error);
        }
  //  In theory this would check if value is number, if not return an error.

  // If an assignment is not yet due, do not include it in the results or the average. Additionally, if the learner’s submission is late (submitted_at is past due_at), deduct 10 percent of the total points possible from their score for that assignment.
        // go through learnerSubmission to see the assignments and check if they were turned in before due date.

   const result = getLearnerData(courseInfo, assignmentGroup, learnerSubmission);
    console.log(result);

    // Run through object and provide score of each assignment submitted.
    const grade = learnerSubmission.map(student => student.submission.score);

    // Have to take into account that there are two different students and have to create an average for each.
    // To do that have to run through each submission and group each learner id together. Then run through object and select each score then do math.
    // Implement some try/catch to implement if assignment submitted after due date.     


}




