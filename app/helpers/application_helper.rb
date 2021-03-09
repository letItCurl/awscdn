module ApplicationHelper
  def public_blob_url(blob)
    "https://#{ApplicationController::ACTIVE_STORAGE_HOST}/#{blob.key}"
  end
end
