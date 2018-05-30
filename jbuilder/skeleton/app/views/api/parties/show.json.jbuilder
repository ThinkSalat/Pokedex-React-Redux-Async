json.name @party.name



json.guests do
  json.array! @party.guests.each do |guest|


    json.partial! 'api/guests/guest', guest: guest


    json.gifts do
      json.array! guest.gifts.each do |gift|
        json.extract! gift, :title, :description
      end
    end



  end
end
