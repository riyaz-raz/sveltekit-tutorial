let _count = $state<number>(1);

export function getCount(): number {
  return _count;
}

export function incrementCount() {
  _count += 1;
}