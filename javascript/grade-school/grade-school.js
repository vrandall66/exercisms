//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this.currentStudents = {};
  }

  roster() {
    return this.currentStudents;
  }

  add(name, grade) {
    this.currentStudents[grade]
      ? this.currentStudents[grade].push(name)
      : (this.currentStudents[grade] = [name]);
    this.currentStudents[grade].sort()
  }

  grade(grade) {
    let students = this.currentStudents[grade];
    return students ? students.sort() : []
  }
}
