"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Chip } from "@/components/ui/Chip";
import { CourseCard } from "@/components/cards/CourseCard";
import { courses, topicFilters } from "@/data/courses";

const VISIBLE_FILTERS = 18;

export function DiscoverPassion() {
  const [active, setActive] = useState(topicFilters[0]);

  return (
    <section id="courses" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          title={
            <>
              Discover Your Passion,
              <br />
              Build Your Skills
            </>
          }
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />

        <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-3">
          {topicFilters.slice(0, VISIBLE_FILTERS).map((topic) => (
            <Chip
              key={topic}
              label={topic}
              active={topic === active}
              onSelect={setActive}
            />
          ))}
          <button
            type="button"
            className="cursor-pointer px-2 text-label-s text-brand-600 hover:underline"
          >
            + More
          </button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </Container>
    </section>
  );
}
