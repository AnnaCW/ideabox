FactoryGirl.define do
  factory :idea do
    title
    body "Best idea ever!"
    quality 0
  end

  sequence :title do |n|
    "Title#{n}"
  end
end
