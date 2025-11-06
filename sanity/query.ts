import { groq } from "next-sanity";

export const projectsQuery = groq`
*[_type == "works"]{
    _id,
    title,
    imgUrl,
    description,
    projectLink,
    codeLink,
    tags,
}`;

export const skillsQuery = groq`
*[_type == "skills"]{
    _id, 
    name, 
    icon, 
    bgColor,
}`;

export const experienceQuery = groq`
*[_type == "experiences"]{
    _id, 
    works, 
    year,
    works[]->{
        _id,
        role,
        company,
        description,
    }
}`;

export const aboutQuery = groq`
*[_type == "abouts"]{
    _id,
    title,
    imgUrl,
    description,
}`;
