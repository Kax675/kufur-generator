import { adjectives } from "./adjectives.ts";
import { subjects } from "./subjects.ts";
import { targets } from "./targets.ts";
import { predicates } from "./predicates.ts";

type PredicateType = "orientation" | "status";

function randomBetween(min: number, max: number): number {
  const range = max - min + 1;
  const maxUint32 = 0xFFFFFFFF;
  const acceptableMax = maxUint32 - (maxUint32 % range);

  let randomNumber: number;
  const buffer = new Uint32Array(1);

  do {
    crypto.getRandomValues(buffer);
    randomNumber = buffer[0];
  } while (randomNumber >= acceptableMax); // reject biased values

  return min + (randomNumber % range);
}

function getSuffixedPredicate(input: string, predicateType: PredicateType): string {
  const hardVowels = ["a", "ı", "o", "u"];
  const softVowels = ["e", "i", "ö", "ü"];
  const lastChar = input.at(-1);

  if (!lastChar) return input;

  if (hardVowels.includes(lastChar)) {
    return input + (predicateType === "orientation" ? "na" : "nda");
  }
  if (softVowels.includes(lastChar)) {
    return input + (predicateType === "orientation" ? "ne" : "nde");
  }

  return input; 
}

function generateSwear(): string {
  const adjective = adjectives[randomBetween(0, adjectives.length - 1)];
  const subject = subjects[randomBetween(0, subjects.length - 1)];
  const target = targets[randomBetween(0, targets.length - 1)];
  const predicateType: PredicateType = Math.random() < 0.5 ? "orientation" : "status";
  const predicateList = predicates[predicateType];
  const predicate = predicateList[randomBetween(0, predicateList.length - 1)];

  return `${adjective} ${subject} ${getSuffixedPredicate(target, predicateType)} ${predicate}`;
}

export { generateSwear, randomBetween };