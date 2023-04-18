import  optionClicked  from '../JavaScript';

describe('optionClicked', () => {
  it('should increment the score if isCorrect is true', () => {
    const setScore = jest.fn();
    const score = 0;
    const isCorrect = true;

    optionClicked(setScore, score, isCorrect);

    expect(setScore).toHaveBeenCalledWith(1);
  });

  it('should not increment the score if isCorrect is false', () => {
    const setScore = jest.fn();
    const score = 0;
    const isCorrect = false;

    optionClicked(setScore, score, isCorrect);

    expect(setScore).not.toHaveBeenCalled();
  });
});
