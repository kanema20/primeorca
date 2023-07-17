import groupBy from "lodash/groupBy";

export function getVariations(variations: object | undefined) {
    if (!variations) return {};
    return groupBy(variations, "attribute.slug");
}

// "variations": [
//   {
//       "id": 1,
//       "value": "7",
//       "attribute": {
//           "id": 1,
//           "name": "Size",
//           "slug": "size"
//       }
//   },
//   {
//       "id": 2,
//       "value": "7.5",
//       "attribute": {
//           "id": 1,
//           "name": "Size",
//           "slug": "size"
//       }
//   },
//   {
//       "id": 3,
//       "value": "8",
//       "attribute": {
//           "id": 1,
//           "name": "Size",
//           "slug": "size"
//       }
//   },
//   {
//       "id": 4,
//       "value": "8.5",
//       "attribute": {
//           "id": 1,
//           "name": "Size",
//           "slug": "size"
//       }
//   },
//   {
//       "id": 5,
//       "value": "9",
//       "attribute": {
//           "id": 1,
//           "name": "Size",
//           "slug": "size"
//       }
//   },
//   {
//       "id": 6,
//       "value": "9.5",
//       "attribute": {
//           "id": 1,
//           "name": "Size",
//           "slug": "size"
//       }
//   },
//   {
//       "id": 7,
//       "value": "10",
//       "attribute": {
//           "id": 1,
//           "name": "Size",
//           "slug": "size"
//       }
//   },
//   {
//       "id": 8,
//       "value": "10.5",
//       "attribute": {
//           "id": 1,
//           "name": "Size",
//           "slug": "size"
//       }
//   },
//   {
//       "id": 9,
//       "value": "11",
//       "attribute": {
//           "id": 1,
//           "name": "Size",
//           "slug": "size"
//       }
//   },
//   {
//       "id": 10,
//       "value": "12",
//       "attribute": {
//           "id": 1,
//           "name": "Size",
//           "slug": "size"
//       }
//   },
//   {
//       "id": 11,
//       "value": "13",
//       "attribute": {
//           "id": 1,
//           "name": "Size",
//           "slug": "size"
//       }
//   },
//   {
//       "id": 12,
//       "value": "14",
//       "attribute": {
//           "id": 1,
//           "name": "Size",
//           "slug": "size"
//       }
//   }
// ]