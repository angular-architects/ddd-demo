module.exports = {
  name: 'flight-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/flight-app',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
