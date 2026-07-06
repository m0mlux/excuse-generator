CREATE TABLE IF NOT EXISTS excuses (
    http_code INTEGER PRIMARY KEY,
    tag TEXT NOT NULL,
    message TEXT NOT NULL
);

INSERT OR IGNORE INTO excuses (http_code, tag, message) VALUES
(701, 'Inexcusable', 'Meh'),
(703, 'Inexcusable', 'Explosion'),
(704, 'Inexcusable', 'Goto Fail'),
(706, 'Inexcusable', 'Delete Your Account'),
(710, 'Novelty Implementations', 'PHP');