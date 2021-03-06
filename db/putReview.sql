UPDATE reviews
SET review = $1
WHERE id = $2;
SELECT r.review, u.first_name, u.last_name, r.comment_date, r.user_id, r.id as review_id
FROM reviews  r JOIN users u ON u.id = r.user_id
ORDER BY r.comment_date DESC