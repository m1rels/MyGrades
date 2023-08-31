export function calculateSubjectAverage(grades) {
    const sum = grades.reduce((total, grade) => total + grade, 0);
    return sum / grades.length;
  }

export   function calculateTotalAverage(subjects) {
    const totalGrades = subjects.reduce((total, subject) => total.concat(subject.grades), []);
    const totalSum = totalGrades.reduce((total, grade) => total + grade, 0);
    return totalSum / totalGrades.length;
  }
