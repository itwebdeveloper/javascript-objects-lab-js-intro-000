var recipes = {
  "cake": "Red Velvet"
}

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign(object, {[key]: value});
  return object;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
