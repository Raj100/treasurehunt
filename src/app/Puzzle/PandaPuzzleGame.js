import React, { useState, useEffect } from 'react';

const PandaPuzzleGame = ({ imageSrc, numRows, numCols }) => {
  const [puzzlePieces, setPuzzlePieces] = useState([]);
  const [solved, setSolved] = useState(false);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const checkPuzzleSolved = () => {
    for (let i = 0; i < numRows * numCols; i++) {
      if (puzzlePieces[i] !== i) return false;
    }
    return true;
  };

  const handlePieceClick = (index) => {
    if (solved) return;
    const emptyIndex = puzzlePieces.indexOf(numRows * numCols - 1);
    const pieceIndex = puzzlePieces.indexOf(index);

    if (
      (Math.abs(emptyIndex - pieceIndex) === 1 && Math.floor(emptyIndex / numCols) === Math.floor(pieceIndex / numCols)) ||
      Math.abs(emptyIndex - pieceIndex) === numCols
    ) {
      const newPuzzle = [...puzzlePieces];
      newPuzzle[emptyIndex] = index;
      newPuzzle[pieceIndex] = numRows * numCols - 1;
      setPuzzlePieces(newPuzzle);
      setSolved(checkPuzzleSolved(newPuzzle));
    }
  };

  useEffect(() => {
    const pieces = [...Array(numRows * numCols).keys()];
    const shuffledPieces = shuffleArray(pieces);
    setPuzzlePieces(shuffledPieces);
  }, [numRows, numCols]);

  return (
    <div className="flex flex-wrap w-96 h-96 border border-gray-500">
      {puzzlePieces.map((piece, index) => (
        <div
          key={index}
          className={`w-${100 / numCols} h-${100 / numRows} bg-cover bg-no-repeat cursor-pointer`}
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundPosition: `${-(piece % numCols) * (100 / numCols)}% ${-Math.floor(piece / numRows) * (100 / numRows)}%`,
          }}
          onClick={() => handlePieceClick(piece)}
        />
      ))}
    </div>
  );
};

export default PandaPuzzleGame;
