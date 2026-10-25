import { describe, it, expect } from 'vitest';
import { OWNER_DATA } from '../data/owner';
import { PROJECTS } from '../data/projects';
import { SKILL_CATEGORIES } from '../data/skills';
import { EXPERIENCES } from '../data/experience';

describe('Data Layer & Verification Integrity', () => {
  it('contains authentic owner identity without fabricated data', () => {
    expect(OWNER_DATA.name).toBe('Mohd Mohitur Rahaman');
    expect(OWNER_DATA.email).toBe('mohitur669@gmail.com');
    expect(OWNER_DATA.socials.github).toBe('https://github.com/Mohitur669');
    expect(OWNER_DATA.socials.linkedin).toBe('https://linkedin.com/in/mohitur02');
    expect(OWNER_DATA.resumePath).toBe('https://cdn-public-document.mohitur.com/resume/Mohd_Mohitur_Rahaman_Resume.pdf');
  });

  it('contains 6 verified real projects with valid links and architectures', () => {
    expect(PROJECTS.length).toBe(6);
    PROJECTS.forEach((project) => {
      expect(project.id).toBeDefined();
      expect(project.title).toBeDefined();
      expect(project.techStack.length).toBeGreaterThan(0);
      expect(project.links.github).toMatch(/^https:\/\/github\.com/);
      expect(project.architectureHighlights.length).toBeGreaterThan(0);
    });

    const codeEditor = PROJECTS.find((p) => p.id === 'code-editor');
    expect(codeEditor?.links.live).toBe('https://editor.mohitur.com');

    const speakit = PROJECTS.find((p) => p.id === 'speakit');
    expect(speakit?.links.live).toBe('https://speakit.mohitur.com');
  });

  it('verifies skill taxonomy has valid mappings to projects or domains', () => {
    expect(SKILL_CATEGORIES.length).toBe(4);
    SKILL_CATEGORIES.forEach((cat) => {
      expect(cat.items.length).toBeGreaterThan(0);
      cat.items.forEach((item) => {
        expect(['Core', 'Advanced', 'Exploring']).toContain(item.level);
        expect(item.usedIn.length).toBeGreaterThan(0);
      });
    });
  });

  it('verifies educational milestones match official resume credentials', () => {
    const kiit = EXPERIENCES.find((e) => e.id === 'kiit-mca');
    expect(kiit).toBeDefined();
    expect(kiit?.scoreOrResult).toBe('CGPA: 8.92 / 10');

    const malda = EXPERIENCES.find((e) => e.id === 'malda-bsc');
    expect(malda).toBeDefined();
    expect(malda?.scoreOrResult).toBe('CGPA: 8.92 / 10');
  });
});
