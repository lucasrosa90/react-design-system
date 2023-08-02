export type PartialRecord<K extends keyof any, T> = {
	// eslint-disable-next-line
  [P in K]?: T;
};

export type ParsedCreateAndUpdateDate<T> = Omit<T, 'createdAt' | 'updatedAt'> & { createdAt: Date; updatedAt: Date };
