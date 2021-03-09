class Post < ApplicationRecord
  has_one_attached :picture
  has_rich_text :description
end
