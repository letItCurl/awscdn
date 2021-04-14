# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  title      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Post < ApplicationRecord
  has_one_attached :picture
  has_one_attached :video
  has_rich_text :description

  #after_create :set_filename

  #def set_filename
  #  if self.video.attached?
  #    self.video.blob.update(filename: "desired_filename.#{self.video.filename.extension}")
  #  end
  #end
end
