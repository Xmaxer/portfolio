export const PROJECTS_3D: IProjectType[] = [
  {
    name: "Beretta M1935",
    description: "First few 3D gun models",
    images: [
      "beretta_m1935/M1935_1_thumbnail_400px.png",
      "beretta_m1935/M1935_2_thumbnail_400px.png",
    ],
  },
  {
    name: "FG 42",
    images: [
      "fg_42/Front_right_thumbnail_400px.png",
      "fg_42/Left_thumbnail_400px.png",
      "fg_42/Rear_left_thumbnail_400px.png",
      "fg_42/Right_thumbnail_400px.png",
    ],
  },
];

export interface IProjectType {
    name: string;
    description?: string;
    images: string[]
}
