class Article < ApplicationRecord
  validates :title, :body, presence: true
  validates :title, length: { minimum: 5, maximum: 50 }
  validates :body, length: { minimum: 10, maximum: 1000 }
end
