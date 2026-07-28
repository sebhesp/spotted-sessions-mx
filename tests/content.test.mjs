import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const sessions = JSON.parse(new TextDecoder().decode(readFileSync(new URL("../content/sessions.json", import.meta.url))));
const validStatuses = new Set(["published", "upcoming", "draft"]);

test("sessions have unique slugs", () => {
  const slugs = sessions.map((session) => session.slug);
  assert.equal(new Set(slugs).size, slugs.length);
});

test("sessions include required editorial fields", () => {
  sessions.forEach((session) => {
    assert.ok(session.id);
    assert.ok(session.artist.name);
    assert.ok(session.track.title);
    assert.ok(session.date);
    assert.ok(session.image);
    assert.ok(validStatuses.has(session.status));
  });
});

test("at least one session can anchor the home page", () => {
  assert.ok(sessions.some((session) => session.featured || session.status === "published"));
});
