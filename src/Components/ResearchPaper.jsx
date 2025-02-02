import React from "react";

const researchPapers = [
    {
        title: "Creativity in Computer Science and Fiction Writing",
        author: "Student Researcher",
        link: "https://dialogues.rutgers.edu/all-journals/17-volume-8/40-student-research-papers",
    },
    {
        title: "Effective Manipulation Through Music",
        author: "Student Researcher",
        link: "https://dialogues.rutgers.edu/all-journals/17-volume-8/40-student-research-papers",
    },
    {
        title: "The Ethical and Social Consequences of Direct-to-Consumer Genetic Testing",
        author: "Student Researcher",
        link: "https://dialogues.rutgers.edu/all-journals/17-volume-8/40-student-research-papers",
    },
];

const ResearchPaper = () => {
    return (
        <section className="py-10 mx-3 lg:mx-0">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Recommended Research Papers
                </h2>
                <div className="space-y-4">
                    {researchPapers.map((paper, index) => (
                        <div
                            key={index}
                            className="p-4 bg-white rounded-lg border-2 shadow hover:shadow-lg transition duration-300"
                        >
                            <h3 className="text-lg font-semibold text-gray-700">
                                {paper.title}
                            </h3>
                            <p className="text-sm text-gray-500">By {paper.author}</p>
                            <a
                                href={paper.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline mt-2 inline-block"
                            >
                                Read More
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResearchPaper;