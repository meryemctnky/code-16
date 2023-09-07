import { HiMiniBuildingLibrary } from 'react-icons/hi2';
import { RiTeamFill } from 'react-icons/ri';
import { BsGeoAlt, BsEnvelope, BsPhone, BsHeartPulseFill } from 'react-icons/bs';
import { BiSolidCar } from 'react-icons/bi';
import { GiChestnutLeaf } from 'react-icons/gi';
import { IoBarChartSharp } from 'react-icons/io5';
import { FaRegLightbulb } from 'react-icons/fa';
import { SlEnergy } from 'react-icons/sl';
import { MdEmojiTransportation, MdOutlinePhonelink } from 'react-icons/md';

export const navLinks = [
  {
    path: '/',
    display: 'Home',
  },
  {
    path: '/about',
    display: 'About',
  },
  {
    path: '/projects',
    display: 'Projects',
  },
  {
    path: '/idea',
    display: 'Idea',
  },
  {
    path: '/contact',
    display: 'Contact',
  },
];

export const categories = [
  { icon: <HiMiniBuildingLibrary className='text-primary categorie-icon' />, title: 'Governance' },
  { icon: <RiTeamFill className='text-primary categorie-icon' />, title: 'Human' },
  { icon: <BsHeartPulseFill className='text-primary categorie-icon' />, title: 'Life' },
  { icon: <BiSolidCar className='text-primary categorie-icon' />, title: 'Transportation' },
  { icon: <GiChestnutLeaf className='text-primary categorie-icon' />, title: 'Environment' },
  { icon: <IoBarChartSharp className='text-primary categorie-icon' />, title: 'Economy' },
];

export const content = [
  {
    icon: <FaRegLightbulb className='fs-1 p-2 text-bg-primary rounded-3' />,
    title: 'Concept Explanation',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam placeat odio corporis.',
  },
  {
    icon: <MdEmojiTransportation className='fs-1 p-2 text-bg-primary rounded-3' />,
    title: 'Smart Transportation Systems',
    desc: 'Quisque quam purus, consequat non neque sit amet, fermentum porta lacus.',
  },
  {
    icon: <SlEnergy className='fs-1 p-2 text-bg-primary rounded-3' />,
    title: 'Energy Sustainability',
    desc: 'Reprehenderit necessitatibus voluptates, explicabo ab ipsa sequi corrupti quod ratione. Dolorum officia ipsum nisi dicta.',
  },
  {
    icon: <MdOutlinePhonelink className='fs-1 p-2 text-bg-primary rounded-3' />,
    title: 'Digital Services and Accessibility',
    desc: 'Nulla feugiat magna in felis porttitor, quis sagittis tortor pharetra. Sit amet consectetur adipisicing elit.',
  },
];

export const counterValues = [
  { value: '7264', desc: 'km2, square' },
  { value: '422', desc: 'Year of Foundation' },
  { value: '345220', desc: 'Population' },
  { value: '645', desc: 'Successful Programs' },
];

export const services = [
  {
    icon: <BiSolidCar className='fs-1 p-2 text-bg-success text-light rounded-3' />,
    title: 'Lorem Ipsum',
    desc: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',
  },
  {
    icon: <GiChestnutLeaf className='fs-1 p-2 text-bg-success text-light rounded-3' />,
    title: 'Sed ut perspiciatis',
    desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
  },
  {
    icon: <IoBarChartSharp className='fs-1 p-2 text-bg-success text-light rounded-3' />,
    title: 'Magni Dolores',
    desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia',
  },
  {
    icon: <HiMiniBuildingLibrary className='fs-1 p-2 text-bg-success text-light rounded-3' />,
    title: 'Nemo Enim',
    desc: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis',
  },
];

export const contactInfoData = [
  {
    icon: <BsGeoAlt className='text-white' />,
    title: 'Location',
    content: 'A108 Adam Street, New York, NY 535022',
  },
  {
    icon: <BsEnvelope className='text-white' />,
    title: 'Email',
    content: 'info@example.com',
  },
  {
    icon: <BsPhone className='text-white' />,
    title: 'Call',
    content: '+1 5589 55488 55',
  },
];

export const signupForm = [
  { name: 'email', type: 'email', label: 'Email address' },
  { name: 'password', type: 'password', label: 'Password' },
  { name: 'confirmPassword', type: 'password', label: 'Confirm Password' },
];

export const signinForm = [
  { name: 'email', type: 'email', label: 'Email address' },
  { name: 'password', type: 'password', label: 'Password' },
];

export const footerLinks = [
  {
    path: '/',
    display: 'Facebook',
  },
  {
    path: '/',
    display: 'Twitter',
  },
  {
    path: '/',
    display: 'Youtube',
  },
  {
    path: '/',
    display: 'Instagram',
  },
  {
    path: '/',
    display: 'Linkedin',
  },
];
