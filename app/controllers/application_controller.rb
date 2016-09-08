class ApplicationController < ActionController::Base
  include ActionController::MimeResponds

  respond_to :json, :html
end
