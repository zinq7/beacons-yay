module.exports = unit => {
	// Register unit's name
	EntityMapping.nameMap.put(unit.name, unit.constructor);

	// Find available class id and register it
	unit.classId = -1;
	for (var i in EntityMapping.idMap) {
		if (!EntityMapping.idMap[i]) {
			EntityMapping.idMap[i] = unit.constructor;
			unit.classId = i;
			return;
		}
	}
	throw new IllegalArgumentException(unit.name + " has no class ID");
};
