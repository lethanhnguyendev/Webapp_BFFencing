/**
 * Gallery categories - each corresponds to a subfolder in public/images/gallery/
 * Add new folders here when you add new image categories
 */
export const GALLERY_CATEGORIES = [
  {
    id: 'colorbond-good-neighbour',
    name: 'Colorbond Good Neighbour',
    folder: 'colorbond Good Neighbour',
    description: 'Premium Colorbond Good Neighbour fence installations',
    images: [
      '20250205_121515.jpg', '20250225_095237.jpg', '20250306_132100.jpg', '20250410_100452.jpg',
      '20250415_113346.jpg', '20250423_144659.jpg', '20250724_123952.jpg', '20250926_173138.jpg',
      '20251016_102854.jpg', 'Colorbond  Good Neighbour fence.jpg', 'Colorbond Good Neighbour fence on top of retaining wall.jpg',
      'Colorbond Good Neighbour fence with concrete under fence plinth.jpg', 'Colorbond Good Neighbour fence_.jpg',
      'Colorbond Good Neighbour Fence_(1).jpg', 'Colorbond Good Neighbour fence_(2).jpg', 'Colorbond Good Neighbour Fence.jpg',
      'Copy of FB_IMG_1761095684852.jpg', 'FB_IMG_1754684979086.jpg', 'FB_IMG_1754685440791.jpg',
      'FB_IMG_1761095632039.jpg', 'FB_IMG_1761095679492.jpg', 'FB_IMG_1761095682232.jpg',
      'FB_IMG_1761095684852.jpg', 'FB_IMG_1761095687724.jpg', 'Good Neighbour Fence and gate.jpg',
      'Good Neighbour Fence on retaining wall_.jpg', 'Good Neighbour Fence on top of retaining wall_.jpg',
      'Good Neighbour Fence on top of retaining wall.jpg', 'Good Neighbour Fence tapered at front.jpg',
      'Good Neighbour Fence_.jpg', 'Good Neighbour Fence_(1).jpg', 'Good Neighbour fence_(2).jpg',
      'Good Neighbour Fence_(3).jpg', 'Good Neighbour Fence_(4).jpg', 'Good Neighbour Fence_(5).jpg',
      'Good Neighbour fence.jpg'
    ]
  },
  {
    id: 'fence-extension',
    name: 'Fence Extension',
    folder: 'fence extension',
    description: 'Colorbond and slat fence extensions',
    images: [
      'Colorbond Good Neighbour fence extension_.jpg', 'Colorbond Good Neighbour fence extension_(1).jpg',
      'Slat fence extension_.jpg', 'Slat fence extension_(1).jpg', 'Slat fence extension_(2).jpg'
    ]
  },
  {
    id: 'gates',
    name: 'Gates',
    folder: 'gates',
    description: 'Colorbond gates and gate installations',
    images: [
      '20250306_144830.jpg', '20250408_124050.jpg', '20250423_144722.jpg', '20250611_152135.jpg',
      '20250813_111736.jpg', '20250813_111739.jpg', 'Colorbond double gate.jpg', 'Colorbond double gate(1).jpg',
      'Colorbond Good Neighbour gate_.jpg', 'Colotlrbond gate and panel.jpg', 'Double gate (colorbond).jpg',
      'FB_IMG_1754685445755.jpg'
    ]
  },
  {
    id: 'post-and-rail',
    name: 'Post and Rail Colorbond',
    folder: 'post and rail colorbond',
    description: 'Colorbond post and rail fencing',
    images: [
      '20250902_100244.jpg', 'Colorbond Good Neighbour gate_.jpg', 'Colorbond post and rail fence.jpg'
    ]
  },
  {
    id: 'retaining-wall',
    name: 'Retaining Wall',
    folder: 'retaining wall',
    description: 'Colorbond fence on retaining walls',
    images: [
      'Colorbond Good Neighbour fence on top of retaining wall.jpg',
      'Colorbond Good Neighbour fence with retaining wall.jpg',
      'Colorbond Good Neighbour on top of retaining wall_.jpg',
      'FB_IMG_1754684574361.jpg', 'FB_IMG_1761095591657.jpg'
    ]
  },
  {
    id: 'slat',
    name: 'Slat',
    folder: 'slat',
    description: 'Slat fence and gate projects',
    images: [
      'FB_IMG_1761095720995.jpg', 'FB_IMG_1761095749102.jpg', 'Slat fence and gate.jpg',
      'Slat fence and gate(1).jpg', 'Slat gate and panel.jpg', 'Slat gate_.jpg', 'Slat gate_(1).jpg'
    ]
  },
  {
    id: 'tubular',
    name: 'Tubular',
    folder: 'tubular',
    description: 'Tubular blade fence installations',
    images: [
      '20251027_174230.jpg', '20251027_174233.jpg', '20251027_174243.jpg', '20251027_174248.jpg',
      '20251027_174308.jpg', 'Blade fence with colourbond boundary_.jpg',
      'Blade gate and fence panel (tubular).jpg', 'FB_IMG_1754684994877.jpg', 'FB_IMG_1761095726429.jpg',
      'FB_IMG_1761095730309.jpg', 'FB_IMG_1761095759081.jpg', 'Tubular fence.jpg'
    ]
  },
  {
    id: 'automated-gates',
    name: 'Automated Gates',
    type: 'video',
    folder: 'Automated',
    description: 'Automated gate installations in action',
    videos: [
      '20251027_174331.mp4',
      '20251027_174506.mp4',
      '20251027_175214.mp4'
    ]
  }
]

const base = import.meta.env.BASE_URL

export function getImageUrl(folder, filename) {
  const encodedFolder = encodeURIComponent(folder)
  const encodedFilename = encodeURIComponent(filename)
  return `${base}images/gallery/${encodedFolder}/${encodedFilename}`
}

export function getVideoUrl(folder, filename) {
  const encodedFolder = encodeURIComponent(folder)
  const encodedFilename = encodeURIComponent(filename)
  return `${base}images/gallery/${encodedFolder}/${encodedFilename}`
}
